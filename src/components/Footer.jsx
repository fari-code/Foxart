import { Container } from "./Container";
import { social} from "../constants"
export const Footer = () => {
  return (
    <div className="bg-n-7 lg:py-12 mt-5 py-4 lg:mt-16">
      <Container className="flex flex-col gap-3 lg:gap-1 lg:flex-row items-center justify-between body-3 text-n-3">
        <div className="flex items-center gap-4">
    {social.map((link)=>(
      <a key={link.id} title={link.alt} target="_blank" rel="noreferrer" href={link.link} >
        <img src={link.ico} alt={link.alt} width={20} height={20}/>
      </a>
    ))}
        </div>
        <div className="space-x-4 ">
           <a href="#/" className="no-underline" target="_blank"  rel="noreferrer">Terms and conditions</a>
           <a href="#/" className="no-underline" target="_blank"  rel="noreferrer">Privacy Policy</a>
        </div>
        <div>&copy; 2026 All right reserved {" "}
        <a href="#/" target="_blank"  rel="noreferrer">Foxart</a> </div>
      </Container>
    </div>
  );
};
