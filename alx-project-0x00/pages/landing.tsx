import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
       <div className="p-8 space-y-4">
      {/* Small Buttons */}
      <div className="space-x-2">
        <Button title="Small - sm" styles="text-sm rounded-sm px-2 py-1" />
        <Button title="Small - md" styles="text-sm rounded-md px-2 py-1" />
        <Button title="Small - full" styles="text-sm rounded-full px-2 py-1" />
      </div>

      {/* Medium Buttons */}
      <div className="space-x-2">
        <Button title="Medium - sm" styles="text-base rounded-sm px-4 py-2" />
        <Button title="Medium - md" styles="text-base rounded-md px-4 py-2" />
        <Button title="Medium - full" styles="text-base rounded-full px-4 py-2" />
      </div>

      {/* Large Buttons */}
      <div className="space-x-2">
        <Button title="Large - sm" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large - md" styles="text-lg rounded-md px-6 py-3" />
        <Button title="Large - full" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
    </div>
  )
}
export default Landing