//NAVIGATION
export const NAV_LINKS = [
    { href: "/", key: "features", label: "Features" },
    { href: "/", key: "pricing", label: "Pricing" },
    { href: "/", key: "faqs", label: "FAQs" },
    {
        href: "/", key: "other services", label: "Other Services",
        dropdown: [
            { href: '/', label: 'Property Management Software' },
            { href: '/', label: 'Security Cameras' },
            // Add more dropdown items here
        ],
    },
];

export const TOPNAV_LINKS = [
    { href: "/", key: "faqs", label: "FAQs" },
    {
        href: "/", key: "other services", label: "Other Services",
        dropdown: [
            { href: '/', label: 'Property Management Software' },
            { href: '/', label: 'Security Cameras' },
            // Add more dropdown items here
        ],
    },
];

export const MANAGEMENT_LISTS = [
    {
        url: "https://cdn.prod.website-files.com/61eca48c11315a1923c76b16/61f0cbd71445e30de9963736_online-payments.svg",
        label: "Payments Integration",
        content: "We integrate with popular payment methods such as Mpesa and all Banks. Then, payments are automatically recorded on our system and we alert you on the specific tenant who has paid. Eliminates headaches of tenants lying about payments or losing receipts."
    },
    {
        url: "https://cdn.prod.website-files.com/61eca48c11315a1923c76b16/61f0d482624858005c37653b_statements.svg",
        label: "Invoice/Receipt Management",
        content: "Go paperless with SMS invoices and receipts. You can easily generate invoices and receipts on our platform and send them to tenants through SMS."
    },
    {
        url: "https://cdn.prod.website-files.com/61eca48c11315a1923c76b16/61f0d3d850462b74995f8bff_tenant-statements.svg",
        label: "Updated Tenant records",
        content: "Digitized and accurate tenant records and account balances that are easy to sort through and maintain. Helps quickly resolve tenant disputes around account balances by keeping track of all tenant invoices and payments."
    },
    {
        url: "https://cdn.prod.website-files.com/61eca48c11315a1923c76b16/61f0cee7507b7f2ed0ee17f7_SMS.svg",
        label: "SMS services",
        content: "Easily communicate with tenants using SMS on tenant balances, announcements and so much more from the comfort of your home/office. Helping you save time from traveling to the property or meeting tenants."
    },
    {
        url: "https://cdn.prod.website-files.com/61eca48c11315a1923c76b16/61f0ca334594636b5718171a_Untitled%20design%20(2).svg",
        label: "Automate Property Management tasks",
        content: "Save time by automating repetitive tasks such as reminding tenants to pay, recording payments and sending receipts. Allowing you to easily scale and manage more properties."
    },
    {
        url: "https://cdn.prod.website-files.com/61eca48c11315a1923c76b16/61f0d57f2eac3625c150ebfd_accounting.svg",
        label: "Reports and Statements",
        content: "Quickly generate tenant, property and landlord statements with the click of a button."
    },
];

export const MANAGEMENT_LISTS1 = [
    {
        url: "/Group (1).png",
        label: "Find your Address",

    },
    {
        url: "/Group (2).png",
        label: "Get  Your Home’s BISH! by SMS",

    },
    {
        url: "/Vector (1).png",
        label: "Book your plumber and get your 2024 BISH!",

    },
];

export const MANAGEMENT_LISTS2 = [
    {

        label: "Easy to book",

    },
    {

        label: "Local",

    },
    {

        label: "Insured",

    },
    {

        label: "Reliable",

    },
    {

        label: "Experts",

    },
];

export const REASON_LISTS = [
    {
        label: "Block Toilets Sinks,   Pipes and Drains",
    },
    {
        label: "Burst Pipes",
    },
    {
        label: "Floods",
    },
    {

        label: "Hot Water Problems",

    },
    {

        label: "Overflows",

    },
    {

        label: "And more",

    },
];


export const REVIEWS_LISTS = [
    {
        label: "Tenant Financial Management has now been fully automated thanks to Bomahut",
        content: "Bomahut has helped us get rid of the mental fatigue that comes with managing a large number of units. Any time we need their help, their support team is always readily available.",
        username: "Terry Ng'ang'a",
        role: "CEO, Property Hall Investment"
    },
    {
        label: "Rent and Utility invoicing has been simplified.",
        content: "Before Bomahut, I used quickbooks to manually invoice every tenant. With Bomahut tenant invoicing has been simplified. I can easily create rent and utility invoices in bulk. ",
        username: "Juliah Kibiru",
        role: "Landlord"
    },
    {
        label: "Bomahut's payment reminders have helped increase rent collection",
        content: "Bomahut's payment reminders have also helped remind tenants to pay on time. In addition all tenant records are in a place allowing better organization of tenant financial records. We can easily know tenants with unpaid balances. ",
        username: "Titus Onsase",
        role: "Property Agent"
    },
    {
        label: "Managing tenants has been made very simple",
        content: "We no longer have to record payments as they come in or even invoice tenants every new month. Rent and Utility bills invoicing is automated as well as recording of payments. At this point, I can also send payment reminders which are also done in bulk and every tenant who has a balance receives a reminder.  ",
        username: "Allan Tuikong",
        role: "Landlord"
    },
];


export const FAQs_LISTS = [
    {
        label: "What is Bomahut?",
        content: "Bomahut is a property management system for landlords and property managers in Kenya. Bomahut helps landlords and property managers save time and money by leveraging technology.",
    },
    {
        label: "Does the system have any downtimes?",
        content: "The system has no downtimes. We have backups for every part of our system so that there will be no interruption in service.",
    },
    {
        label: "Do I have to pay for any upgrades done in the system?",
        content: "You do not have to pay for any upgrades made to the system. We continuously improve the software at no cost to you.",
    },
    {
        label: "Is my data safe?",
        content: "Your data is safe. All data transmitted is SSL encrypted and all data is password protected so that only you and your authorized users have access to your data. We also hold backups on your data so that you never loose your data.",
    },
    {
        label: "Do you provide support?",
        content: "Yes, we provide support through email (support@bomahut.com) and phone (+254 717 512 483). You may contact us anytime between 8am-7pm (GMT+3, Kenyan time). Our team also offers training on how to use the system.",
    },
    {
        label: "Can I export my data?",
        content: "Yes you can export the data such as invoices, payments and tenant records from our system into a spreadsheet.",
    },
    {
        label: "Can I communicate with tenants through the system?",
        content: "Yes you can communicate with tenants through the system to send announcements or send invoices and receipts.",
    },
];

export const FAQs_LISTS1 = [
    {
        label: "Nunc sed augue lacus viverra?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        label: "Non quam lacus suspendisse faucibus?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        label: "Duis ultricies lacus sed turpis tincidunt id aliquet?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];


// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: "All Pages",
        links: [
            "Features",
            "Pricing",
            "Security Cameras",
            "Property Management Services",
            "FAQs",
            "Blog",
            "Tutorials",
            "Downloads"
        ],
    },
    {
        title: "Contact Us",
        links: [
            "+ 254 717 512 483",
            "newton@bomahut.com",
            "Vision Flats, Mombasa Road - Nairobi",
        ],
    },

];

export const PROFIT_LIST = [
    {
        title: 'Plumbers at cost ',
        content: "We don't profit from plumbers so you can save BIG on your next plumbing job."
    },
    {
        title: 'No mark ups on parts ',
        content: "Yep, we don't mark up parts so you can save more."
    },
    {
        title: 'Experts only, naturally',
        content: "We only work with the best in your area so you're in safe hands"
    },
]

export const CLOSE_BISH = [
    "Tell us where your live",
    "We’ll send your home’s BISH! code by SMS",
    "Contract to your local team to get your exclusive BISH!",
]
