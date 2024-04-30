import React from "react";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto">
        <div>
          <div className="flex justify-center items-center lg:py-12 py-5">
            <h1 className="uppercase font-bold lg:text-3xl md:text-2xl text-xl underline">
              Know Our Privacy Policy
            </h1>
          </div>
          <div className="xl:px-0 px-3">
            <p className="font-bold">CraftCorner is committed to protecting your privacy. Here are
            additional points regarding our privacy practices: Information
            Collection: We collect personal information such as name, email, and
            address only when necessary for providing services or processing
            orders.</p>
             <br /><br />
            <strong>Data Usage:</strong> Your information is used for order processing,
            communication, and improving our services. We may also use
            anonymized data for analytics and marketing purposes. <br />
            <strong>Data Security:</strong> We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or
            destruction. <br />
            <strong>Third-Party Services:</strong> CraftCorner may utilize
            third-party services such as payment processors or shipping
            providers. Please review their privacy policies for information on
            how they handle your data. <br />
            <strong>Cookie Usage:</strong> We use cookies and similar
            technologies to enhance your browsing experience and track usage
            patterns on our website. You can adjust your browser settings to
            disable cookies if desired. <br />
            <strong>Data Retention:</strong> We retain your personal
            information only for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, or as required by law. Policy <br />
            <strong>Updates:</strong> CraftCorner may update this Privacy Policy periodically. Any changes will be communicated through our website or via email. <br /> <br /><br />
            <p className="font-bold">By using CraftCorner's website and services, you consent to the
            terms outlined in this Privacy Policy. If you have any questions or
            concerns about our privacy practices, <span className="underline text-green-600">please contact us.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
