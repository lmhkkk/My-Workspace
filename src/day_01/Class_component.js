import React ,{Component} from 'react';

//statefull component - Class component
class ClassComponent extends Component {
    render() {
        let name = "Hoang"
        let age = 26
        let adress = <h3>I live in HCM city</h3>
        //JSX - Javascripts xml
        return (
            <div>
                <h1>{name}</h1>

                <h2>{age>=18 ? `${name} da du tuoi lai xe` : `${name} chua du tuoi lai xe`}</h2>
 
            </div>

        );
    }
}

export default ClassComponent;