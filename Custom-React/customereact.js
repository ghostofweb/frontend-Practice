function customeRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type) //creating elemet of a
    // domElement.innerHTML=reactElement.children //innerhtml , giving the text
    // domElement.setAttribute('href',reactElement.props.href) //giving attr of href
    // domElement.setAttribute("target",reactElement.props.target) //giving attr of href
    // container.appendChild(domElement)
}
// making custome react elemet
const reactElement = {
    type:"a"
,   props:{
    href:"https://google.com",
    target:"_blank"
},
children:"Click me to visit google"
}

const mainContainer = document.getElementById("root")
customeRender(reactElement,mainContainer)
