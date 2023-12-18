import Button from "./Button";
const list = ["All", "Music", "Gaming", "Songs", "Cricket", "Soccer", "Cooking"]
const ButtonsList = () => {
    return <div className="flex">
        {list.map(l => <Button key={l} name={l} />)}
    </div>
};
export default ButtonsList;