import { h,Component } from 'preact';
import { withRouter } from 'react-router-dom';

class BtnSub extends Component {

    constructor(props) {
        super(props);
        this.setItem = this.setItem.bind(this);
        this.state = {
          name:'ioioio',
          age:'',
          keyWord:''
        }
    }


    setItem = (e) => {
        let curName = e.target.name;
        let curVal = e.target.value;
        this.setState({
          [curName] : curVal
        })
        //alert(curName+":"+curVal);
    }

    search = (router, queryAccountId) => {
        if (queryAccountId) {
            router.history.push(`/profile/${encodeURIComponent(queryAccountId)}`);
        }
    }

    getFormData = () => {
       let curData ='name='+this.state.name+'&age='+this.state.age+'&keyWord='+this.state.keyWord+'';
           alert("curData:"+curData);
           alert("this.state:"+JSON.stringify(this.state));

        return {
             name: this.state.name,
             age: this.state.age,
             keyWord: this.state.keyWord
         }

         // let curData ='name='+this.state.name+'&keyWord='+this.state.keyWord+'';
         // alert("curData:"+curData);
         // return curData;
    }


    render(router, { text = '' }) {
        return(
            <section>
                <p>Enter an account of Github.</p>
                  <input name = "name"
                         type="text"
                         placeholder="eg: name"
                         value = {this.state.name}
                         onChange = {(e) => this.setItem(e)}
                      />

                  <input name = "age"
                             type="text"
                             placeholder="eg: age"
                             value = {this.state.keyWord}
                             onChange = {(e) => this.setItem(e)}
                            />

                  <input name = "keyWord"
                         type="text"
                         placeholder="eg: keyWord"
                         value = {this.state.keyWord}
                         onChange = {(e) => this.setItem(e)}
                        />

                  <input
                         type="button"
                         placeholder="eg: mvpde06"
                         onClick={(e) => this.search(router, JSON.stringify(this.getFormData()))}
                        />
            </section>
        )
    }


}



module.exports = BtnSub;
