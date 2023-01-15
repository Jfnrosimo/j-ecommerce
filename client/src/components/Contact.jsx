//Import UI
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="bg-blue-500 text-slate-100 h-12 flex justify-around items-center px-32">
      <h2 className="font-semibold">BE IN TOUCH WITH US:</h2>
      <form>
        <input
          className="py-0.5 px-0.5"
          type="text"
          placeholder="Enter your email"
        />
        <button className=" bg-gray-800 rounded-r-md px-2">JOIN US</button>
      </form>
      <div className="flex gap-1">
        <FacebookIcon />
        <GoogleIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </div>
  );
};

export default Contact;
