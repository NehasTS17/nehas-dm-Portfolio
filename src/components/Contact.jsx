import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

import mail from '../assets/images/mail.png';
import website from '../assets/images/website.png';
import linkedin from '../assets/images/linkedinLogo.png';
import facebook from '../assets/images/fb.png';
import youtube from '../assets/images/YT.png';
import instagram from '../assets/images/insta.png';

const Contact = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // =====================================================
  // GOOGLE APPS SCRIPT URL
  // =====================================================

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyaoS05uiu-FQogJBgblp8neD2YVdg3ZLJWqzY8AjDImLOW_Zuv9EJs3jgiZ8jd92E8SA/exec';


  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  // =====================================================
  // HANDLE FORM SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSubmitted(false);

    try {
      const data = new URLSearchParams();

      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('message', formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Show success message
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

    } catch (error) {
      console.error('Failed to send message:', error);

      alert('Failed to send message. Please try again.');

    } finally {
      setLoading(false);
    }
  };


  // =====================================================
  // CONTACT INFORMATION
  // =====================================================

  const contactInfo = [
    {
      label: 'Mail',
      value: 'negae13@gmail.com',
      icon: mail,
      href: 'mailto:negae13@gmail.com'
    },
    {
      label: 'Website',
      value: 'https://nehas-dm-portfolio.vercel.app/',
      icon: website,
      href: 'https://nehas-dm-portfolio.vercel.app/'
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/nehas-dm/',
      icon: linkedin,
      href: 'https://www.linkedin.com/in/nehas-dm/'
    }
  ];


  // =====================================================
  // SOCIAL LINKS
  // =====================================================

  const socialLinks = [
    {
      name: 'Facebook',
      icon: facebook,
      link: 'https://www.facebook.com/profile.php?id=61583965953306'
    },
    {
      name: 'YouTube',
      icon: youtube,
      link: 'https://www.youtube.com/@PlanetBeautySalon-b1u'
    },
    {
      name: 'Instagram',
      icon: instagram,
      link: 'https://www.instagram.com/planetbeautysalon/?hl=en'
    }
  ];


  // =====================================================
  // RETURN
  // =====================================================

  return (
    <section
      id="contact"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-white'
      }`}
    >

      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            TITLE
        ===================================================== */}

        <h2
          className={`text-4xl font-bold mb-4 text-center transition-all duration-300 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Let's{' '}
          <span style={{ color: 'rgb(var(--color-primary))' }}>
            Connect
          </span>
        </h2>


        <p
          className={`text-lg text-center mb-12 transition-all duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          If you're looking to scale your brand, generate quality
          leads, or improve your digital marketing performance,
          let's work together.
        </p>


        <div className="grid md:grid-cols-2 gap-12">


          {/* =====================================================
              LEFT SIDE - CONTACT INFORMATION
          ===================================================== */}

          <div className="space-y-8">

            <h3
              className={`text-2xl font-bold mb-6 transition-all duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Get in Touch
            </h3>


            {/* CONTACT DETAILS */}

            <div className="space-y-4">

              {contactInfo.map((info, index) => (

                <a
                  key={index}
                  href={info.href}
                  className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                    isDark
                      ? 'hover:bg-slate-900'
                      : 'hover:bg-slate-100'
                  }`}
                >

                  <img
                    src={info.icon}
                    alt={info.label}
                    className="w-10 h-10 object-contain"
                  />

                  <div>

                    <p
                      className={`font-semibold transition-all duration-300 ${
                        isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }`}
                    >
                      {info.label}
                    </p>

                    <p
                      className={`transition-all duration-300 ${
                        isDark
                          ? 'text-slate-400'
                          : 'text-slate-600'
                      }`}
                    >
                      {info.value}
                    </p>

                  </div>

                </a>

              ))}

            </div>


            {/* =====================================================
                SOCIAL LINKS
            ===================================================== */}

            <div>

              <h4
                className={`font-bold mb-4 transition-all duration-300 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Follow Me
              </h4>


              <div className="flex gap-4">

                {socialLinks.map((social, index) => (

                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 ${
                      isDark
                        ? 'bg-slate-900 hover:bg-slate-800'
                        : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                  >

                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-8 h-8 object-contain"
                    />

                  </a>

                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT SIDE - CONTACT FORM
          ===================================================== */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAME */}

            <div>

              <label
                htmlFor="name"
                className={`block text-sm font-semibold mb-2 ${
                  isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-900 text-white placeholder-slate-500'
                    : 'bg-slate-100 text-slate-900 placeholder-slate-500'
                }`}
                placeholder="Your Name"
              />

            </div>


            {/* EMAIL */}

            <div>

              <label
                htmlFor="email"
                className={`block text-sm font-semibold mb-2 ${
                  isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-900 text-white placeholder-slate-500'
                    : 'bg-slate-100 text-slate-900 placeholder-slate-500'
                }`}
                placeholder="your@email.com"
              />

            </div>


            {/* SUBJECT */}

            <div>

              <label
                htmlFor="subject"
                className={`block text-sm font-semibold mb-2 ${
                  isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-900 text-white placeholder-slate-500'
                    : 'bg-slate-100 text-slate-900 placeholder-slate-500'
                }`}
                placeholder="Project Inquiry"
              />

            </div>


            {/* MESSAGE */}

            <div>

              <label
                htmlFor="message"
                className={`block text-sm font-semibold mb-2 ${
                  isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                  isDark
                    ? 'bg-slate-900 text-white placeholder-slate-500'
                    : 'bg-slate-100 text-slate-900 placeholder-slate-500'
                }`}
                placeholder="Tell me about your project..."
              />

            </div>


            {/* =====================================================
                SUBMIT BUTTON
            ===================================================== */}

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                loading
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:shadow-lg hover:scale-105'
              }`}
              style={{
                backgroundColor: 'rgb(var(--color-primary))'
              }}
            >

              {loading ? 'Sending...' : 'Send Message'}

            </button>


            {/* =====================================================
                SUCCESS MESSAGE
            ===================================================== */}

            {submitted && (

              <div
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  isDark
                    ? 'bg-green-900/30 text-green-300'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                ✓ Message sent successfully!
                I'll get back to you soon.
              </div>

            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
