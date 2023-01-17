import Input from "@/ui/system/Input/Input";

export default () => {
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <Input variant="fill" label="First name" placeholder="Your first name" />
        <Input variant="plain" label="Last name" placeholder="Your last name" />
        <Input label="Comment" placeholder="Some words" />
      </div>
    </div>
  );
};
