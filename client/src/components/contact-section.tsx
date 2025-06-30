import { Mail, Github, Linkedin, Send, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "[your.email@example.com]",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Github,
      title: "GitHub", 
      value: "github.com/[yourusername]",
      href: "https://github.com/yourusername"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/[yourprofile]", 
      href: "https://linkedin.com/in/yourprofile"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and interesting projects. Let's connect!
        </p>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <div key={contact.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{contact.title}</h3>
                <p className="text-slate-600">{contact.value}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Email
            <Send className="ml-2 h-4 w-4" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            View GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
