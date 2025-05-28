import React from 'react';

const FooterSection: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id={"footer"} className="bg-white border-t border-primary-200 dark:bg-[#00072d]">
            <div className="py-6">
                <p className="text-center font-montserrat font-medium max-[425px]:text-sm">
                    © {currentYear} Sourav Saha. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default FooterSection;