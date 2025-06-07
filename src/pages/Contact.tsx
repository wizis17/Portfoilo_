
import { useEffect } from "react";
import Layout from "@/components/Layout";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <ContactHeader />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
