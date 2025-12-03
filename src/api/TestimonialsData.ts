interface Testimonial {
  name: string;
  role: string;
  // image: string;
  description: string;
  rating: any;
  icon: string;
  title: string;
  color: string;
  category: string;
  number: string;
  image: string;
}

// NOTE use image if needed also remove the empty image string

const TestimonialsData: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    // image:
    // "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    description:
      "Radon Lab transformed our online presence completely. Their attention to detail and creative approach exceeded all our expectations.",
    rating: 5,
    icon: "",
    title: "",
    color: "",
    category: "",
    number: "",
    image: "",
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenLeaf Co.",
    // image:
    // "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    description:
      "Working with this team was an absolute pleasure. They delivered a stunning website that perfectly captures our brand identity.",
    rating: 5,
    icon: "",
    title: "",
    color: "",
    category: "",
    number: "",
    image: "",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, StyleHub",
    // image:
    // "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
    description:
      "Professional, responsive, and incredibly talented. Our new e-commerce site has boosted sales by 150% in just three months.",
    rating: 5,
    icon: "",
    title: "",
    color: "",
    category: "",
    number: "",
    image: "",
  },
];

export default TestimonialsData;
