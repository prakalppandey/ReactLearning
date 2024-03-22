function customRender(reactELement, container){
    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.children
    for (const prop in reactELement.props) {
        if (prop=='children') continue; 
            domElement.setAttribute(prop,reactELement.props[prop])
            
        }
        container.appendChild(domElement)
    }
    


const reactELement ={
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click to visit Google'
}
const mainContainer = document.querySelector('#root')

customRender(reactELement, mainContainer)