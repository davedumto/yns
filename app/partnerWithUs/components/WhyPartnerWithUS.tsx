import Image from "next/image"
import {
  BlogHeadshot1,
  BlogHeadshot2,
  BlogHeadshot3,
} from "../../../public/images/partnerWithUs"

const WhyPartnerWithUS: React.FC = () => {
  return (
    <section className="pt-[120px]">
      <h2 className="text-[40px] font-lato text-[#2F2F2F]">
        Why partner with us?
      </h2>
      <section className="pt-[72px] grid gap-[120px]">
        <div className="flex gap-[23px] items-center">
          <Image src={BlogHeadshot1} width={403} height={314} alt="Image One" />
          <Article
            info1="Visibility"
            info2="Brand Awareness"
            title="Amplify Your Brand's Impact"
            text="Partnering with us gives your brand the opportunity to make a lasting impact in the education sector. Align your organization with a meaningful cause that resonates with socially responsible and forward-thinking audiences"
          />
        </div>
        <div className="flex gap-[23px] justify-end items-center">
          <Article
            info1="Talent Pipeline"
            info2="Innovation"
            title="Access a Network of Future Innovators"
            text="By collaborating with Young and Skilled Initiative, you'll gain direct access to a community of talented, skilled young individuals who are poised to become tomorrow's industry leaders and innovators."
          />
          <Image src={BlogHeadshot2} width={403} height={314} alt="Image One" />
        </div>
        <div className="flex gap-[23px] items-center">
          <Image src={BlogHeadshot3} width={403} height={314} alt="Image One" />
          <Article
            info1="Sustainability"
            info2="Reputation"
            title="Strengthen Your Corporate Social Responsibility"
            text="Partnering with us enhances your corporate social responsibility efforts by contributing to educational initiatives that drive real change. This collaboration elevates your company’s reputation as a key player in shaping a better future."
          />
        </div>
      </section>
    </section>
  )
}

interface ArticleProps {
  info1: string
  info2: string
  title: string
  text: string
}

const Article: React.FC<ArticleProps> = ({ info1, info2, title, text }) => {
  const float: string =
    "px-4 py-3 rounded-[44.98px] border-[1px] border-[#8E9BAE] text-[#8E9BAE] text-sm leading-4"
  return (
    <article className="grid gap-[14px] w-[394px] font-lato">
      <div className="flex gap-4">
        <p className={float}>{info1}</p>
        <p className={float}>{info2}</p>
      </div>
      <h2 className="text-[#1A1A1A] text-2xl ">{title}</h2>
      <p className="leading-[32px] text-[#8E9BAE]">{text}</p>
    </article>
  )
}

export default WhyPartnerWithUS