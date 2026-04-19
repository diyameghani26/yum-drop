import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "Help with orders",
    content: "Having trouble with your order? Our support team is available 24/7. You can track your order from the home page or contact us below.",
  },
  {
    id: 2,
    title: "General Issues",
    content: "Facing any general issues with the app? Try refreshing the page or clearing your browser cache. Still stuck? Write to us!",
  },
  {
    id: 3,
    title: "FAQs",
    content: "Q: How do I place an order?\nA: Browse restaurants, select items and click ADD.\n\nQ: Can I cancel my order?\nA: Orders can be cancelled within 2 minutes of placing.\n\nQ: Is YumDrop free to use?\nA: Yes! YumDrop is completely free to browse.",
  },
  {
    id: 4,
    title: "Legal, Terms & Conditions",
    content: "By using YumDrop, you agree to our terms of service. YumDrop is a demo project built for learning purposes only. All restaurant data is fetched live from Swiggy API.",
  },
  {
    id: 5,
    title: "Report Safety Emergency",
    content: "If you face a safety emergency, please call 112 immediately. For app-related safety concerns, email us at safety@yumdrop.com",
  },
  {
    id: 6,
    title: "Payment Issues",
    content: "Having trouble with payments? YumDrop currently supports UPI, Credit/Debit cards and Cash on Delivery. For failed transactions, the amount is refunded within 5-7 business days.",
  },
  {
    id: 7,
    title: "Delivery Issues",
    content: "Is your delivery late? Average delivery time is 30-40 minutes. Delays may occur due to bad weather or high demand. You can track your delivery live from the orders page.",
  },
  {
    id: 8,
    title: "Offers & Coupons",
    content: "Apply coupon codes at checkout to get discounts. Offers are valid for limited time only. Some offers are applicable only on first orders or specific restaurants.",
  },
  {
    id: 9,
    title: "Account & Profile",
    content: "Update your name, email or delivery address from the Profile section. To delete your account, contact our support team at support@yumdrop.com",
  },
  {
    id: 10,
    title: "Partner Onboarding",
    content: "Want to list your restaurant on YumDrop? Fill the contact form below with your restaurant details and our team will get back to you within 48 hours!",
  },
];

const Help = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <div>
      {/* Header */}
      <div className="bg-[#fcaa67] text-center px-6 py-8 text-white">
        <h1 className="text-3xl  md:text-5xl font-bold">Help & Support</h1>
        <p className="text-sm mt-1 md:text-2xl opacity-90">
          Let's take a step ahead and help you better.
        </p>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto mt-9 md:mt-9 px-4 flex flex-col md:flex-row gap-4">

        {/* Left — Categories — horizontal scroll on mobile */}
        <div className="md:w-1/2 flex md:flex-col flex-row overflow-x-auto md:overflow-visible bg-gray-50 rounded-xl border border-gray-200">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActive(cat)}
              className={`px-5 py-4 md:py-5 cursor-pointer text-sm font-medium border-b border-gray-200 transition whitespace-nowrap md:whitespace-normal
                ${active.id === cat.id
                  ? "bg-white text-orange-500 md:border-l-4 md:border-l-orange-500 border-b-2 border-b-orange-500"
                  : "text-gray-700 hover:bg-white"
                }`}
            >
              {cat.title}
            </div>
          ))}
        </div>

        {/* Right — Content */}
        <div className="md:w-2/3 mt-5 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold mb-3 md:mb-4 text-gray-800">
            {active.title}
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed whitespace-pre-line">
            {active.content}
          </p>

          {/* Contact Form */}
          <div className="mt-6 border-t pt-7">
            <p className="text-lg font-medium text-gray-700 mb-4">
              Still need help? Contact us:
            </p>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 md:py-4 text-sm mb-3 md:mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 md:py-4 text-sm mb-3  md:mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Describe your issue..."
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2  md:py-4 text-sm mb-3 md:mb-5 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-500 text-white px-5 py-2 md:py-3 md:px-7 rounded-lg text-sm font-medium hover:bg-orange-600 transition  md:mt-4 md:text-lg">
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Help;

