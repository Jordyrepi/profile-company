import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ProductsTesti from "./components/Product";
import Testimonials from "./components/Testimonials";

export const metadata = {
  title: "PalseSphere Tech || Company Profile",
  description: "Jordy is a dedicated student who is currently enrolled in a full-stack web development course at Purwhadhika. With a strong foundation in computer science, Jordy Repi has developed an aptitude for learning new technologies and incorporating them into innovative solutions.",
  openGraph: {
    title: "PalseSphere Tech || Company Profile",
    description: "Jordy is a dedicated student who is currently enrolled in a full-stack web development course at Purwhadhika. With a strong foundation in computer science, Jordy Repi has developed an aptitude for learning new technologies and incorporating them into innovative solutions.",
    images: "https://img.freepik.com/free-photo/view-computer-video-display-monitor_23-2150757363.jpg?t=st=1700812633~exp=1700816233~hmac=b5ca88ce8f2addfd842a9a4220b8b1ce8fcb37eb91f23e4298d6edccc30a88a0&w=1480",
  },
}
export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <ProductsTesti />
      <Testimonials />
      <ContactUs />
    </>
  )
}
