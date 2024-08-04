import { TextProps } from "../../types"

const LargeText = ({text, style} : TextProps) => {
  return (
    <h2 className={`text-3xl my-6 ${style}`}>{text}</h2>
  )
}

export default LargeText