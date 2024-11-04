import Header from "@/components/Header";
import Head from 'next/head';


export default function Terms() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="bg-white min-h-screen w-screen">
                <Header />

                <div className="px-6 py-4 max-w-3xl mx-auto">
                    <div className="text-black p-6 rounded-lg shadow-md overflow-y-auto max-h-[70vh]">
                        <h1 className="flex text-black items-center justify-center text-2xl font-semibold">
                            Terms of Service
                        </h1>
                        <h2 className="text-xl font-semibold mb-4">Last updated: 11/03/2024</h2>
                        <p className="mb-4">
                            Thank you for using Tivity! These Terms of Service ("Terms") govern your
                            access to and use of Tivity and any related services provided by [Company Name]
                            (collectively referred to as the "Service"). By accessing or using the Service,
                            you agree to be bound by these Terms.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">1. Acceptance of Terms</h3>
                        <p className="mb-4">
                            By creating an account or otherwise using the Service, you agree to these Terms.
                            If you do not agree to these Terms, you may not use the Service. We reserve the
                            right to update or modify these Terms at any time. If we do, we’ll post the changes
                            on our website or notify you directly. Your continued use of the Service after any
                            changes signifies your acceptance of the updated Terms.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">2. Eligibility</h3>
                        <p className="mb-4">
                            You must be at least 13 years of age to use the Service. By using the Service,
                            you represent and warrant that you have the legal capacity to enter into these Terms.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">3. User Content</h3>
                        <p className="mb-4">
                            <strong>3.1 Ownership:</strong> Users maintain ownership of all content, such as photos,
                            videos, comments, and other materials ("User Content") that they upload or post to the Service.
                            By uploading User Content, you retain all intellectual property rights associated with your content.
                        </p>
                        <p className="mb-4">
                            <strong>3.2 License to Use User Content:</strong> By uploading or posting User Content to the
                            Service, you grant Tivity a non-exclusive, worldwide, royalty-free, sublicensable,
                            and transferable license to use, store, display, reproduce, modify, create derivative works,
                            and distribute your User Content on the Service solely for the purposes of operating, developing,
                            and improving the Service.
                        </p>
                        <p className="mb-4">
                            <strong>3.3 Content Deletion:</strong> Users may request the deletion of their User Content at any
                            time by contacting us at owner@tivity.app. Upon receiving a deletion request, we will make reasonable
                            efforts to remove the specified content from the Service. However, residual copies of your content
                            may persist in our backup systems for a limited period after deletion.
                        </p>
                        <p className="mb-4">
                            <strong>3.4 Content Removal and Modification by Tivity:</strong> Tivity reserves
                            the right to remove, modify, or restrict access to any User Content at its sole discretion,
                            without prior notice, if we believe it violates these Terms or is harmful to the Service or its users.
                        </p>
                        {/* Add additional sections as needed */}
                        <p className="mt-4">
                            If you have any questions about these Terms, please contact us at owner@tivity.app.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}
