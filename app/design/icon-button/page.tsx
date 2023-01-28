import Button from "@/ui/system/Button/Button"
import IconButton from "@/ui/system/IconButton/IconButton"
import { AiOutlineMore } from "react-icons/ai"

export default () => {
  return (
    <div>
      <IconButton>
        <AiOutlineMore />
      </IconButton>
      <IconButton variant="outline">
        <AiOutlineMore />
      </IconButton>
      <IconButton variant="plain">
        <AiOutlineMore />
      </IconButton>
      <IconButton variant="plain">
        <AiOutlineMore />
      </IconButton>
    </div>
  )
}