import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "Founders Friday is a tech community event connecting professionals in Abuja.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "You can register by clicking the “Register For Our Next Event” button below.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "Yes, the event is free for all attendees.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "The venue details will be shared upon successful registration.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "Topics include tech trends, innovation, and community building.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur.",
      answer: "Yes, Founders Friday is open to teams and individuals.",
    },
  ];

  return (
    <section className="py-12 container">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
          FAQs
        </h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {faqItems && faqItems.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="xl:w-[70%]  xl:mx-auto">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="font-medium text-purple-900 focus:outline-none">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-sm text-primaryLight">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
