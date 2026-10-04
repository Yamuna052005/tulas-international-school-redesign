// All page copy and static content lives here so components stay presentational.
// Copy is taken from the existing homepage at https://tis.edu.in/.

export const SCHOOL = {
  name: 'Tulas International School',
  logo: 'https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png',
  helpline: '+91-9837983791',
  helplineHref: 'tel:+919837983791',
  landlines: [
    { label: '0135-2699444', href: 'tel:01352699444' },
    { label: '0135-2699666', href: 'tel:01352699666' },
  ],
  email: 'info@tis.edu.in',
  address: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  mapsUrl: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  mapEmbed:
    'https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India&t=m&z=11&output=embed&iwloc=near',
  applyUrl: 'https://admission.tis.edu.in',
  tourUrl: 'https://tis.edu.in/virtual-tour/',
};

export const NAV_LINKS = [
  { id: 'about', label: 'About TIS', primary: true },
  { id: 'campus', label: 'Campus', primary: true },
  { id: 'sports', label: 'Sports', primary: true },
  { id: 'community', label: 'Community', primary: true },
  { id: 'reviews', label: 'Parents', primary: true },
  { id: 'enquire', label: 'Admission', primary: false },
  { id: 'contact', label: 'Contact', primary: false },
];

// Sections watched by useActiveSection ('top' is the hero).
export const SECTION_IDS = ['top', ...NAV_LINKS.map((link) => link.id)];

export const STATS = [
  { value: 22, label: 'acre pollution-free campus' },
  { value: 16, suffix: '+', label: 'Olympic sports' },
  { display: '24*7', label: 'medical assistance' },
  { display: '6:1', label: 'student–teacher ratio' },
];

export const RANKINGS = [
  { rank: '#1', place: 'In Dehradun', title: 'Co-Educational Boarding School in Dehradun', source: 'Education Today' },
  { rank: '#2', place: 'In Uttarakhand', title: 'Co-Educational Boarding School in North India', source: 'Education Today' },
  { rank: '#1', place: 'In North India', title: 'Co-Educational Boarding School in North India', source: 'Outlook' },
  { rank: '#4', place: 'In India', title: 'Co-Educational Boarding School in India', source: 'Education Today' },
];

export const SPORTS = [
  'Archery', 'Cycling', 'Hockey', 'Swimming', 'Taekwondo', 'Football', 'Shooting Range', 'Horse Riding',
  'Billiards', 'Squash', 'Volleyball', 'Basketball', 'Cricket', 'Lawn Tennis', 'Badminton', 'Table Tennis',
];

export const PEOPLE_TABS = [
  { id: 'sports', label: 'Sports persons and influencers' },
  { id: 'leaders', label: 'Leaders of India' },
];

export const PEOPLE = {
  sports: [
    { name: 'Sakshi Malik', about: 'First Indian woman wrestler to win an Olympic medal (Rio 2016 bronze). Commonwealth Games silver medalist, Rajiv Gandhi Khel Ratna awardee 2016, Padma Shri awardee 2017.' },
    { name: 'Vishesh Bhriguvanshi', about: 'Indian Basketball Team captain and major FIBA Asia Championship player. Under his captaincy, India won 3x3 basketball gold at the Asian Beach Games in 2008.' },
    { name: 'Prakashi Tomar & Late Ms Chandro Tomar', about: 'The “Shooter Dadis” and 30-time National Championship winners. Bhumi Pednekar and Taapsee Pannu played them in the biopic Saand ki Aankh.' },
    { name: 'Abhishek Verma', about: 'Archer ranked 6th in the world, Arjuna awardee and Asian Games gold medalist in 2013.' },
    { name: 'Aditi Gopichand Swami', about: 'Archer ranked 7th in the world, Arjuna awardee and World Champion in 2024.' },
    { name: 'Jeevan Jyot Singh Teja', about: 'Dronacharya awardee in Archery, 2022.' },
    { name: 'Ojas Devtale', about: 'Archer ranked 9th in the world, Arjuna awardee 2023 and current world champion.' },
    { name: 'Rajat Chauhan', about: 'Archer ranked 5th in the world and Arjuna awardee 2016.' },
    { name: 'Devendra Singh Bisht', about: 'Selector for the under-18 School Indian Football Team.' },
    { name: 'Manish Metani', about: 'Indian football player.' },
    { name: 'Saurabh Joshi', about: 'Influencer with 30 million subscribers on YouTube.' },
    { name: 'Arushi Nishank', about: 'Kathak dancer, actor, film producer, environmentalist, TEDx speaker and National Convener of Sparsh Ganga.' },
    { name: 'Laxmi Agarwal', about: 'Founder and President of The Laxmi Foundation for acid attack survivors, and recipient of the International Women Empowerment Award. The film Chhapaak is based on her story.' },
  ],
  leaders: [
    { name: 'Shri Dharmendra Pradhan Ji', about: 'Union Minister of Education, India.' },
    { name: 'Dr Ramesh Pokhriyal Nishank Ji', about: 'Former Union Cabinet Minister for Education, Government of India, and former Chief Minister of Uttarakhand.' },
    { name: 'Shri Trivendra Singh Rawat Ji', about: 'Member of Parliament and former Chief Minister, Uttarakhand.' },
    { name: 'Shri Bhagat Singh Koshyari Ji', about: 'Former Governor of Maharashtra and Goa, and former Chief Minister of Uttarakhand.' },
    { name: 'Shri Dhan Singh Rawat Ji', about: 'Minister of Higher Education, Uttarakhand.' },
    { name: 'Shri Subodh Uniyal Ji', about: 'Technical Education and Forest Minister, Uttarakhand.' },
    { name: 'Shri Arvind Pandey Ji', about: 'MLA and former Education Minister.' },
    { name: 'Shri Namami Bansal Ji', about: 'IAS, Municipal Commissioner, Uttarakhand.' },
    { name: 'Shri Abhinav Kumar Ji', about: 'ADG and former DGP of Uttarakhand Police.' },
    { name: 'Shri Amit Kumar Sinha Ji', about: 'ADG and Principal Secretary Sports, Uttarakhand.' },
    { name: 'Shri Sunil Uniyal Gama Ji', about: 'Former Mayor, Municipal Corporation, Dehradun.' },
    { name: 'Shri Sahdev Singh Pundir Ji', about: 'MLA Sahaspur, Uttarakhand.' },
  ],
};

export const STUDENT_VOICES = [
  {
    quote: 'We feel supported in what we do and nudged further to do more',
    text: 'At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.',
  },
  {
    quote: 'Tulas helped me thrive and become the best version of myself',
    text: 'When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.',
  },
];

export const FEATURED_PARENT_QUOTE =
  'We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.';

export const REVIEWS = [
  { name: 'Tashi Tsering', relation: 'Father of Jigmet Skaldon', text: 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.' },
  { name: 'Namita Agarwal', relation: 'Mother of Krishna Agarwal', text: 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.' },
  { name: 'Sandeep Kumar', relation: 'Father of Aryan', text: 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.' },
  { name: 'Pinky Sharma', relation: 'Mother of Swastik Sharma', text: 'I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.' },
  { name: 'Suresh Kumar', relation: 'Father of Aditya Kumar', text: 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.' },
  { name: 'Mrs Urja Bhayani', relation: 'Mother of Shikha and Samarth Bhayani', text: 'Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.' },
  { name: 'Amit Agrawal', relation: 'Father of Samruddhi Agrawal', text: 'Being a parent it’s a big challenge to find a Boarding School that qualifies your parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.' },
  { name: 'Ashu Arora', relation: 'Mother of Manisha Changrani', text: 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.' },
  { name: 'Gulabdas Gupta', relation: 'Father of Annika Gulabdas Gupta', text: 'We admitted our daughter, Annika, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.' },
  { name: 'Selendra K. Ajmera', relation: 'Father of Aman Ajmera', text: 'Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.' },
];

export const COUNTRY_CODES = ['+91', '+971', '+1', '+44', '+61', '+65', '+975', '+977'];

export const CLASSES = [
  'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII',
  'Class IX', 'Class X', 'Class XI', 'Class XII',
];

export const STATES = [
  'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh',
  'Chhattisgarh', 'Dadra and Nagar Haveli', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra',
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim',
  'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Other',
];

export const FOOTER_LINKS = [
  { label: 'FAQ', href: 'https://tis.edu.in/faq/' },
  { label: 'Brochure', href: 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf' },
  { label: 'Privacy Policy', href: 'https://tis.edu.in/privacy-policy/' },
  { label: 'Terms & Conditions', href: 'https://tis.edu.in/terms-conditions/' },
  { label: 'Disclaimer', href: 'https://tis.edu.in/disclaimer/' },
  { label: 'Child Welfare & Safety Policy', href: 'https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf' },
];

export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/tulas_intschool' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
];
