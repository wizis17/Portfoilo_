
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { to, subject, body } = await req.json();
    
    // Log the incoming request for debugging
    console.log(`Email notification request: to=${to}, subject=${subject}`);
    
    // In a real implementation, you would integrate with an email service like Resend, SendGrid, etc.
    // For now, we'll just log the information and return a success response
    console.log(`Would send email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    
    // Return a successful response
    return new Response(JSON.stringify({ success: true, message: "Email notification logged" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-email-notification function:", error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
