import socialData from "../data/socials.json";
import IconButtonOverflow from "./IconButtonOverflow";
import { socialSchema, IconLink } from "../config/schema";
import { iconSizeMap } from "../config/sizes";
import { socialIcons } from "@/config/hicons";

const socials = socialSchema.parse(socialData).socials;

function SocialLink({ name, href, size }: IconLink) {
  const SocialIcon = socialIcons[name as keyof typeof socialIcons];
  const iconSize = iconSizeMap[size];
  return (
    <div className="m-1 inline-block text-secondary transition duration-300 ease-in-out hover:text-socialHov">
      {name === "Email" ? (
        <IconButtonOverflow hiddenText="magana.emil.a@gmail.com">
          <SocialIcon size={iconSize} />
        </IconButtonOverflow>
      ) : (
        <a href={href} target="_blank">
          <SocialIcon size={iconSize} />
        </a>
      )}
    </div>
  );
}
function SocialList() {
  return (
    <div className="flex gap-1 place-self-center bg-transparent">
      {socials.map((social, index) => (
        <SocialLink key={index} {...social} />
      ))}
    </div>
  );
}
export default SocialList;
