import "./Button.css"

export default function Button({action, label="Click me"}){
    return <button onClick={action} className="Button">{label}</button>
}