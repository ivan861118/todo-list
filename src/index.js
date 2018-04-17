import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();




class AllContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:'What need to be done?',
            list:[
                //==+++<List``
                // name={'default'}
                // onButtonClick={this.handleDeleteList}
                // itemList={['item1','item2']}
                // idx={0}/>
                {name: 'Default list' ,
                 id:0 ,
                 itemList:[
                            {name:'default item' ,done:false,id:0}
                                    ]}
            ],
            
            // array:[<Item/>],
            cur:0

        };
        this.handleDeleteList=this.handleDeleteList.bind(this);
        // this.handleChangeContent=this.handleChangeContent.bind(this);
        this.handleAddItem=this.handleAddItem.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        this.handleItemCheck=this.handleItemCheck.bind(this);
        this.handleContentChange=this.handleContentChange.bind(this);

        
    }

    handleInputChange=(new_input)=>{
        this.setState({input:new_input});    
    }

    handleAddList=()=>{
        // alert('add list');
        const newId = (new Date()).getTime();
        // const newId = Math.floor(Math.random()*500);
        let {list} = this.state;
        // const msg=prompt('list name is :');
        list.push(
            {name:this.state.input, id:newId ,itemList:[
                {name:'default' ,done:false ,id:newId+1 }
                ]}
        );
        this.setState({list:list,
                        input:''});
        console.log(this.state.list);


        // new_list.push(
        //                 <List
        //                 name={this.state.input}
        //                 onDeleteList={this.handleDeleteList}
        //                 onAddItem={this.handleAddItem}
        //                 itemList={[
        //                 <Item name={'defalut'}/> ]}
        //                 idx={this.state.list.length-1}/>
        //             )
        // this.setState({list:new_list});

        // console.log('new list:'+this.state.list);

    }

    handleAddItem=(id)=>{
        // const new_array=this.state.array.push(this.state.input);
        const newId = (new Date()).getTime();
        const msg=prompt('enter new item :');
        const {list}=this.state;
        let index = list.findIndex(item => item.id === id);

        // const select_list=list.filter((item) => item.id===id);
        // console.log(select_list[0].name);
       
        list[index].itemList.push({name:msg ,done:false,id:newId});
        // select_list[0].itemList.push({name:msg ,done:false});
        this.setState(
            {list:list}
        );



        // alert(new_array);
        // this.setState({array:[...this.state.array,
        //                     <Item name={this.state.input}
        //                           onButtonClick={this.handleDeleteItem}/>],
        //                 input:'......'});
        
    }

    handleDeleteList=(id)=>{
        // alert('delete list');
        const {list}=this.state;
        const new_list=list.filter((item) => item.id !== id);

        this.setState({list:new_list});

        console.log(this.state.list);

        // var new_list=this.state.list;
        // const id=event.target.parentNode.id;
        
        
        // const index=new_list.indexOf(event.target.parentNode.id);
        // console.log(event.target.parentNode);
        // console.log(index);
        // alert('delete list');
        // // new_array.splice(index,1);

        // // this.setState({array:new_array});
    }

    handleDeleteItem=(id1,id2)=>{
        const {list}=this.state;
        let index = list.findIndex(item => item.id === id1);

        list[index].itemList=list[index].itemList.filter((item)=>item.id !==id2);
        // const new_list=list.filter((item) => item.id !== id);

       
        // new_array.splice(index,1);

        this.setState({list:list});
    }

    // handleItemCheck=(id1,id2)=>{
    //     let {list}=this.state;
        
    //     let index1 = list.findIndex(item => item.id === id1);
    //     let index2 = list[index1].itemList.findIndex(item => item.id === id2);

    //     list[index1].itemList[index2].done = !( list[index1].itemList[index2].done );
    //     // let flag =list[index1].itemList[index2].done;
    //     // if( flag === false ){
    //     //     list[index1].itemlist[index2].done = !flag;
    //     //     }else {
    //     //         list[index1].itemlist[index2].done= !flag;}

        
        
    //     this.setState({list:list});

        
    // }
    handleItemCheck=(idx1,idx2)=>{
        let {list}=this.state;
        
        

        list[idx1].itemList[idx2].done = !( list[idx1].itemList[idx2].done );
       

        
        
        this.setState({list:list});

        
    }

    handleContentChange = (idx) => {
        const {list}=this.state;
        const msg=prompt('change list name to : ');
        list[idx].name=msg;
        this.setState({list});

    }

    render(){
        const {list}=this.state;
        // const divStyle={backgroundImage: 'url(http://pic.qiantucdn.com/58pic/14/16/13/66r58PICXcd_1024.jpg)'};

        
        const todolist=list.map((list,idx)=>
            <List 
            name={list.name} 
            // key={idx}
            id={list.id} 
            itemList={list.itemList}
            onDeleteList={this.handleDeleteList}
            onButtonClick={this.handleChangeContent}
            onAddItem={this.handleAddItem}
            onDeleteItem={this.handleDeleteItem}
            onItemCheck={this.handleItemCheck}
            handleContentChange={this.handleContentChange}
            idx={idx}
            /> 
        );
           
        return(

            <div >
                <div>
                    
                    <div  className='header'> 
                        Todo list
                    </div>
                </div>
                <hr></hr>
                <InputField 
                    input={this.state.input}
                    onInputChange={this.handleInputChange}
                    onButtonClick={this.handleAddList} />
                <hr></hr>

                {/* <ListTable
                    list={this.state.list}
                    onClick={this.handleAddList}
                    />
                 */}
                 <div>
                <ul>
                {todolist}
                </ul>
                </div>
            
                {/* <ProductTable 
                    list={this.state.list}
                    onDeleteList={this.handleDeleteList}
                    onAddItem={this.handleAddItem}
                    

                    /> */}

                {/* <Footer list={this.state.list}/> */}

            </div>   
        );
    }
}

//  class ListTable extends React.Component{
//     constructor(props){
//         super(props);   
//     }
    
    
    

//     handleAddList=(event)=>{

   
//         this.props.onClick();
//         // alert(this.props.list);

        
//     }
   


//     render(){

      
//         return(
//             <div>
//             <div>{this.props.list}</div>
//             <button onClick={this.handleAddList}>Add List</button>
//             </div>
//         );

//     }

    


//  }




class InputField extends React.Component{
    constructor(props){
        super(props);   
    }

    handleButtonClick = (event) =>{
       
       this.props.onButtonClick(this.props.input);

    //    return <ProductTable listName={this.state.input}/>

    }

    handleInputChange=(event)=>{
        // const value=event.target.value;
      this.props.onInputChange(event.target.value);     
    }
    
    render(){
        return(
            <div> 
                <input value={this.props.input} onChange={this.handleInputChange}/>
                <button onClick={this.handleButtonClick}>Creat List</button>
            </div>   
        );
    }
    
    
}

// class ProductTable extends React.Component{
//     constructor(props){
//         super(props);
   
//     };

//     // handleDeleteItem = (event) =>{
//     //     this.props.onButtonClick(event);
//     //     console.log(event.target);
//     // }

//     render(){
//         const array=this.props.list;
//         const list=array.map((array)=>
//             <List 
//             name={array.name} 
//             id={array.id} 
//             itemList={array.itemList}
//             // onDeleteList={this.props.onDeleteList(this.id)}
//             onAddItem={this.props.onAddItem}
//             /> 
           
            
//         );


//         const array=this.props.itemList;
        

//         const itemList=array.map((array)=>
//              <li >{array}
//                 <button onClick={this.handleDeleteItem}>x</button>
//             </li>
//         );


//         return(
//             <div> 
//                 <ul>
//                 {list}

//                 {/* <List name={this.props.listName} />
//                 <List name={this.props.listName} /> */}

//                 </ul>
//             </div>   
//         );
//     }
    
    
// }

class List extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //             itemList:[<Item name={'default'}/>]
                    
        //         };


        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        this.handleItemCheck=this.handleItemCheck.bind(this);
        this.handleContentChange=this.handleContentChange.bind(this);

  
    }

    handleDeleteList=()=>{
        this.props.onDeleteList(this.props.id);
    }

    handleAddItem=()=>{
        this.props.onAddItem(this.props.id);


        // const msg=prompt('new item is');


        // this.setState({
        //     itemlist:[...this.state.itemList,<Item name={msg}/>]
        // })
    }

    handleDeleteItem=(item_id)=>{
        this.props.onDeleteItem(this.props.id, item_id);

    }
   
    
    
    // handleItemCheck=(item_id) =>{
    //     // this.props.onItemCheck(this.props.id , item_id);
    //     this.props.onItemCheck(this.props.id , item_id);

        
    // }
     handleItemCheck=(idx2) =>{
        // this.props.onItemCheck(this.props.id , item_id);
        this.props.onItemCheck(this.props.idx , idx2);

        
    }
    handleContentChange=()=>{
        this.props.handleContentChange(this.props.idx);
    }
    
    render(){
       
        // const divStyle={border:'5px solid black'};

        const itemList=this.props.itemList;
        const todoItem=itemList.map((itemList,idx) => 

        <Item   name={itemList.name} 
                onButtonClick={this.handleDeleteItem}
                onChange={this.handleItemCheck} 
                id={itemList.id}
                index={idx}
                done={itemList.done}
                />

        // <li>{itemList.name} 
        //     <input type='checkbox'/> <button onClick={this.handleDeleteItem.}>x</button>
        // </li>
            
        
    
        );

        return(


            <div className="list-unit"> 
                 <button onClick={this.handleContentChange}>
                <div className="list-title">{this.props.name}
                </div>
                </button>
               
                <button onClick={this.handleDeleteList}  className="list-button">&#10007;</button>
                <button onClick={this.handleAddItem}  className="list-button">Add item</button>
                <div>

                    <ul>
                    {todoItem}
                    </ul>

                    <Footer itemList={this.props.itemList}/>
                
                
                </div>
                
              

               
                {/* {<Item/>} */}
                
            </div>   
        );
    }
    
    
} 



class Item extends React.Component{
    constructor(props){
        super(props);

        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        this.handleCheckState=this.handleCheckState.bind(this);
        
    }


    handleDeleteItem = () =>{
        this.props.onButtonClick(this.props.id);
    
    }
    
    handleCheckState = () =>{
        // this.props.onChange(this.props.id);
        this.props.onChange(this.props.index);

    }

   

    render(){
        const done=this.props.done;

        
        return(    
           <li className="item-name">{this.props.name} 
           {done ? 
           <input type='checkbox' checked onChange={this.handleCheckState}/>
           :<input type='checkbox'  onChange={this.handleCheckState}/>
           }
            <button onClick={this.handleDeleteItem}>x</button>
           </li>
        );
    }
    
    
}

class Footer extends React.Component{
    
    render(){
        const itemList=this.props.itemList;
        const itemNum=itemList.length;
        let count=0;
        for(let i=0;i<itemList.length;i++){
            if(itemList[i].done===true){count++;}
        }
        

        
        return( 
        <div>
            
        <Todos num={itemNum}/>
        <Done num={count}/>

        </div>
        );
    }
}
class Todos extends React.Component{
    render(){
        return( 
            
        <div>
            Todos:{this.props.num}
        </div>
        );
    }
}

class Done extends React.Component{
    render(){
        return(
         
            
        <div>
            Done:{this.props.num}
        </div>
        );
    }
}





// var node=document.getElementById('root');
// node.style={backgroundImage: 'url(http://pic.qiantucdn.com/58pic/14/16/13/66r58PICXcd_1024.jpg)'};}
ReactDOM.render(<AllContainer /> , document.getElementById('root'));