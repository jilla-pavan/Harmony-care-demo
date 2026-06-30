export const HOSPITAL_INFO = {
  name: 'Harmony Care Multispeciality Hospital',
  tagline: 'Compassion. Care. Excellence.',
  address: 'Road No. 12, Banjara Hills, Hyderabad, Telangana 500034',
  phone: '+91 98765 43210',
  emergency: '+91 98765 40000',
  email: 'info@harmonycare.com',
  whatsapp: '919876543210',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4!2d78.4383!3d17.4126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzQ1LjQiTiA3OMKwMjYnMTcuOCJF!5e0!3m2!1sen!2sin!4v1699999999999',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
  stats: [
    { value: '25+', label: 'Years of Excellence' },
    { value: '50,000+', label: 'Patients Treated' },
    { value: '98%', label: 'Patient Satisfaction' },
    { value: '120+', label: 'Expert Specialists' },
  ],
}

export const DEPARTMENTS = [
  { id: 1, name: 'General Medicine', icon: 'Stethoscope', desc: 'Comprehensive primary care and internal medicine for all age groups.', color: '#0B5ED7' },
  { id: 2, name: 'Pediatrics', icon: 'Baby', desc: 'Specialized care for infants, children, and adolescents with compassion.', color: '#14B8A6' },
  { id: 3, name: 'Gynecology', icon: 'Heart', desc: "Complete women's health services from adolescence through menopause.", color: '#EC4899' },
  { id: 4, name: 'Orthopedics', icon: 'Bone', desc: 'Advanced treatment for bone, joint, and musculoskeletal conditions.', color: '#F59E0B' },
  { id: 5, name: 'Cardiology', icon: 'HeartPulse', desc: 'Expert cardiac care with cutting-edge diagnostics and interventions.', color: '#EF4444' },
  { id: 6, name: 'Dermatology', icon: 'Sparkles', desc: 'Skin, hair, and nail care with modern dermatological treatments.', color: '#8B5CF6' },
  { id: 7, name: 'Dental Care', icon: 'SmilePlus', desc: 'Complete dental solutions from preventive care to cosmetic dentistry.', color: '#06B6D4' },
  { id: 8, name: 'Physiotherapy', icon: 'Activity', desc: 'Rehabilitation and physical therapy for faster, sustainable recovery.', color: '#22C55E' },
  { id: 9, name: 'Diagnostics', icon: 'FlaskConical', desc: 'State-of-the-art lab and imaging services with rapid reporting.', color: '#F97316' },
  { id: 10, name: 'Emergency Care', icon: 'Siren', desc: '24/7 emergency services with rapid response trauma care teams.', color: '#DC2626' },
]

export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Arjun Reddy',
    specialty: 'Senior Cardiologist',
    experience: '22 Years',
    timings: 'Mon–Sat: 9 AM – 1 PM',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    qualifications: 'MBBS, MD, DM (Cardiology)',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Gynecologist & Obstetrician',
    experience: '18 Years',
    timings: 'Mon–Fri: 10 AM – 4 PM',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    qualifications: 'MBBS, MS (OBG), FRCOG',
  },
  {
    id: 3,
    name: 'Dr. Venkat Rao',
    specialty: 'Orthopedic Surgeon',
    experience: '20 Years',
    timings: 'Tue, Thu, Sat: 11 AM – 3 PM',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face',
    qualifications: 'MBBS, MS (Ortho), MCh',
  },
  {
    id: 4,
    name: 'Dr. Sneha Kulkarni',
    specialty: 'Pediatrician',
    experience: '15 Years',
    timings: 'Mon–Sat: 9 AM – 12 PM',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
    qualifications: 'MBBS, MD (Pediatrics), FIAP',
  },
  {
    id: 5,
    name: 'Dr. Rahul Menon',
    specialty: 'General Physician',
    experience: '12 Years',
    timings: 'Mon–Sat: 8 AM – 2 PM',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face',
    qualifications: 'MBBS, MD (Internal Medicine)',
  },
  {
    id: 6,
    name: 'Dr. Ananya Singh',
    specialty: 'Dermatologist',
    experience: '10 Years',
    timings: 'Mon, Wed, Fri: 2 PM – 6 PM',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face',
    qualifications: 'MBBS, MD (Dermatology)',
  },
]

export const PACKAGES = [
  {
    id: 1,
    name: 'Full Body Checkup',
    price: '₹2,499',
    original: '₹4,500',
    color: '#0B5ED7',
    popular: false,
    tests: ['Complete Blood Count', 'Liver Function Test', 'Kidney Function Test', 'Thyroid Profile', 'Lipid Profile', 'Chest X-Ray', 'ECG', 'Urine Analysis'],
  },
  {
    id: 2,
    name: 'Cardiac Package',
    price: '₹3,999',
    original: '₹7,000',
    color: '#EF4444',
    popular: true,
    tests: ['ECG', 'Echo Cardiography', 'Lipid Profile', 'Treadmill Test', 'Cardiac Enzymes', '2D Echo', 'Holter Monitoring', 'Cardiologist Consultation'],
  },
  {
    id: 3,
    name: 'Diabetes Screening',
    price: '₹1,299',
    original: '₹2,500',
    color: '#F59E0B',
    popular: false,
    tests: ['Fasting Blood Sugar', 'Post-Prandial Sugar', 'HbA1c', 'Insulin Levels', 'Urine Microalbumin', 'Kidney Profile', 'Foot Examination', 'Diet Consultation'],
  },
  {
    id: 4,
    name: "Women's Health Package",
    price: '₹3,499',
    original: '₹6,000',
    color: '#EC4899',
    popular: false,
    tests: ['Pap Smear', 'Mammography', 'Bone Density', 'Thyroid Profile', 'Hormonal Panel', 'Pelvic Ultrasound', 'CBC', 'Gynecologist Consultation'],
  },
  {
    id: 5,
    name: 'Child Wellness Package',
    price: '₹1,799',
    original: '₹3,200',
    color: '#22C55E',
    popular: false,
    tests: ['Growth Assessment', 'Developmental Screening', 'CBC', 'Nutritional Profile', 'Vision & Hearing Test', 'Dental Check', 'Immunization Review', 'Pediatrician Consult'],
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ramesh Gupta',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    text: 'After my cardiac surgery at Harmony Care, I have been living a completely normal life. Dr. Arjun Reddy and his team were phenomenal. The care and attention from every nurse and staff member made a difficult time bearable.',
    treatment: 'Cardiac Surgery',
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    location: 'Jubilee Hills, Hyderabad',
    rating: 5,
    text: 'I delivered my baby at Harmony Care and the experience was absolutely wonderful. Dr. Priya and the maternity team were so supportive and reassuring throughout. The facilities are top-class and hygienically maintained.',
    treatment: 'Maternity Care',
  },
  {
    id: 3,
    name: 'Suresh Nair',
    location: 'Kondapur, Hyderabad',
    rating: 5,
    text: 'My knee replacement surgery was handled with exceptional precision by Dr. Venkat Rao. The physiotherapy team helped me walk without pain within weeks. I could not have asked for a better experience.',
    treatment: 'Knee Replacement',
  },
  {
    id: 4,
    name: 'Anitha Krishnamurthy',
    location: 'Madhapur, Hyderabad',
    rating: 5,
    text: "Harmony Care has been our family's trusted hospital for over 10 years. From my children's vaccinations to my parents' chronic care — every visit feels warm and professional. The doctors genuinely care.",
    treatment: 'Family Healthcare',
  },
]

export const FAQS = [
  {
    q: 'What are the visiting hours at Harmony Care?',
    a: 'General visiting hours are 9 AM to 12 PM and 4 PM to 7 PM daily. ICU visiting is restricted to 10 AM to 11 AM and 5 PM to 6 PM. We request visitors to maintain silence and hygiene protocols.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book an appointment online through our website, call us at +91 98765 43210, or WhatsApp us. Walk-ins are also welcome, subject to doctor availability.',
  },
  {
    q: 'Does Harmony Care accept health insurance?',
    a: 'Yes, we are empanelled with all major insurance providers including Star Health, HDFC Ergo, ICICI Lombard, New India Assurance, Medi Assist, and many more. Please carry your insurance card and a valid ID.',
  },
  {
    q: 'Is emergency care available 24/7?',
    a: 'Absolutely. Our Emergency Department operates round-the-clock with dedicated trauma care, emergency physicians, and full support services. Call +91 98765 40000 for immediate assistance.',
  },
  {
    q: 'What COVID-19 safety protocols are in place?',
    a: 'We follow strict infection control protocols including regular sanitization, mandatory hand hygiene stations, ventilated consultation spaces, and trained infection control staff to ensure patient and staff safety.',
  },
  {
    q: 'Do you provide ambulance services?',
    a: 'Yes, Harmony Care operates a fleet of fully equipped advanced life support (ALS) ambulances available 24/7. Call our emergency line at +91 98765 40000 for immediate dispatch.',
  },
]

export const INSURANCE_PARTNERS = [
  'Star Health', 'HDFC Ergo', 'ICICI Lombard', 'New India Assurance',
  'Medi Assist', 'Bajaj Allianz', 'United India', 'Oriental Insurance',
  'Aditya Birla Health', 'ManipalCigna', 'Niva Bupa', 'Care Health',
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: '10 Heart-Healthy Habits to Adopt This Year',
    category: 'Cardiology',
    date: 'May 28, 2025',
    excerpt: 'Small daily changes in diet, exercise, and stress management can dramatically reduce your risk of heart disease. Our cardiologists share their top evidence-based recommendations.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Understanding Childhood Vaccinations: A Parent\'s Guide',
    category: 'Pediatrics',
    date: 'May 15, 2025',
    excerpt: 'Navigating your child\'s vaccination schedule can feel overwhelming. Our pediatric team breaks down what every parent needs to know to keep their children protected.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Managing Diabetes Through Diet: What Actually Works',
    category: 'General Medicine',
    date: 'April 30, 2025',
    excerpt: 'Beyond medication, nutrition plays a critical role in diabetes management. Our specialists explain the dietary approaches supported by the latest clinical evidence.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    readTime: '7 min read',
  },
]

export const FACILITIES = [
  { name: 'Modern ICU', desc: '24-bed ICU with advanced monitoring and ventilator support', icon: 'Monitor' },
  { name: 'Advanced Diagnostics', desc: 'MRI, CT Scan, Digital X-Ray, and 4D Ultrasound', icon: 'ScanLine' },
  { name: '24/7 Pharmacy', desc: 'In-house pharmacy stocking all essential medications', icon: 'Pill' },
  { name: 'ALS Ambulance', desc: 'Advanced life support ambulances on standby round-the-clock', icon: 'Truck' },
  { name: 'Operation Theatres', desc: '8 modular OTs with laminar airflow and latest surgical equipment', icon: 'Scissors' },
  { name: 'Private Rooms', desc: 'Fully equipped private and semi-private rooms for patient comfort', icon: 'BedDouble' },
]

export const WHY_CHOOSE_US = [
  { icon: 'Award', title: 'NABH Accredited', desc: 'Nationally accredited for maintaining the highest patient safety and quality standards.' },
  { icon: 'Users', title: '120+ Specialists', desc: 'An exceptional team of experienced doctors across all major specialties.' },
  { icon: 'Clock', title: '24/7 Emergency', desc: 'Round-the-clock emergency services with rapid response trauma teams.' },
  { icon: 'Shield', title: 'Patient Safety First', desc: 'Rigorous infection control protocols and safety systems at every touchpoint.' },
  { icon: 'Microscope', title: 'Advanced Technology', desc: 'Cutting-edge diagnostic and surgical equipment for precise care.' },
  { icon: 'Heart', title: 'Compassionate Care', desc: 'Every patient is treated with dignity, empathy, and personalized attention.' },
]
