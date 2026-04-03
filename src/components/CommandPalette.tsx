import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Copy, FolderGit2, GraduationCap, Home, Mail, NotebookPen, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface CommandPaletteProps {
  triggerClassName?: string;
}

type PaletteAction = {
  label: string;
  description: string;
  icon: ReactNode;
  shortcut?: string;
  onSelect: () => void;
};

const CommandPalette = ({ triggerClassName }: CommandPaletteProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const pages = useMemo(
    () => [
      {
        label: "Home",
        description: "Go to the hero section",
        icon: <Home className="h-4 w-4" />,
        shortcut: "G H",
        onSelect: () => navigate("/"),
      },
      {
        label: "About",
        description: "Read the bio and background",
        icon: <User className="h-4 w-4" />,
        shortcut: "G A",
        onSelect: () => navigate("/about"),
      },
      {
        label: "Education",
        description: "View academics and certifications",
        icon: <GraduationCap className="h-4 w-4" />,
        shortcut: "G E",
        onSelect: () => navigate("/academics"),
      },
      {
        label: "Projects",
        description: "Open the project gallery",
        icon: <FolderGit2 className="h-4 w-4" />,
        shortcut: "G P",
        onSelect: () => navigate("/projects"),
      },
      {
        label: "Resume",
        description: "Inspect skills, experience, and resume",
        icon: <NotebookPen className="h-4 w-4" />,
        shortcut: "G R",
        onSelect: () => navigate("/resume"),
      },
      {
        label: "Contact",
        description: "Jump to contact info",
        icon: <Mail className="h-4 w-4" />,
        shortcut: "G C",
        onSelect: () => navigate("/contact"),
      },
    ],
    [navigate]
  );

  const contactActions = useMemo(
    () => [
      {
        label: "Open GitHub",
        description: "Visit my source code and repositories",
        icon: <ChevronRight className="h-4 w-4" />,
        shortcut: "GH",
        onSelect: () => window.open("https://github.com/wizis17/", "_blank", "noopener,noreferrer"),
      },
      {
        label: "Open LinkedIn",
        description: "View my professional profile",
        icon: <ChevronRight className="h-4 w-4" />,
        shortcut: "IN",
        onSelect: () => window.open("https://www.linkedin.com/in/tang-kavtheng-3a6b30362/", "_blank", "noopener,noreferrer"),
      },
      {
        label: "Open Telegram",
        description: "Send me a quick message",
        icon: <ChevronRight className="h-4 w-4" />,
        shortcut: "TG",
        onSelect: () => window.open("https://t.me/xiaochen_17", "_blank", "noopener,noreferrer"),
      },
      {
        label: "Copy Email",
        description: "Copy my email address to clipboard",
        icon: <Copy className="h-4 w-4" />,
        shortcut: "CP",
        onSelect: async () => {
          await navigator.clipboard.writeText("tangkavtheng@gmail.com");
        },
      },
    ],
    []
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingField =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (!isTypingField && event.key === "/") {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runAction = async (action: () => void) => {
    await action();
    setOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={triggerClassName}
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span>Command</span>
        <CommandShortcut>Ctrl K</CommandShortcut>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="border-b border-[#00ff88]/30 bg-[#050b14] px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#00ff88] [font-family:'Share_Tech_Mono',monospace]">
                Quick Navigation
              </p>
              <p className="text-[11px] text-muted-foreground">
                Navigate the portfolio or open external links.
              </p>
            </div>
            <span className="hud-pill">/ or Ctrl K</span>
          </div>
        </div>

        <CommandInput placeholder="Type a command or search a section..." />
        <CommandList className="max-h-[420px] bg-[#050b14]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Jump to Pages">
            {pages.map((item) => (
              <CommandItem
                key={item.label}
                value={item.label}
                onSelect={() => runAction(item.onSelect)}
                className="data-[selected=true]:bg-[#00ff88]/15 data-[selected=true]:text-[#00ff88]"
              >
                {item.icon}
                <div className="ml-3 flex flex-1 flex-col text-left">
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </div>
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Contact / Links">
            {contactActions.map((item) => (
              <CommandItem
                key={item.label}
                value={item.label}
                onSelect={() => runAction(item.onSelect)}
                className="data-[selected=true]:bg-[#00d4ff]/15 data-[selected=true]:text-[#00d4ff]"
              >
                {item.icon}
                <div className="ml-3 flex flex-1 flex-col text-left">
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.description}</span>
                </div>
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandPalette;
