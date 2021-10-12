function Atag(props) {
    return <a href={"https://dev-mes.pantheonsite.io"+props.link} target="_blank" rel="noreferrer">{props.children}</a> 
}
export default Atag;