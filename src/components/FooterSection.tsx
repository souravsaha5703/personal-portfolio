import React from 'react';

const FooterSection: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id={"footer"} className="bg-white border-t border-zinc-600 bg-zinc-100/20 dark:bg-zinc-950">
            <div className="py-6">
                <p className="text-center font-montserrat font-medium max-[425px]:text-sm">
                    © {currentYear} Sourav Saha. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default FooterSection;