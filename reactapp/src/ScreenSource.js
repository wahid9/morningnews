import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { List, Avatar, Icon} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux'

function ScreenSource(props) {

  const [sourceList, setSourceList] = useState([])
  const [selectedLang, setSelectedLang] = useState(props.selectedLang)



  useEffect(() => {
    const APIResultsLoading = async() => {
      var langue ='fr'
      var country ='fr'
console.log("jj")
    if (selectedLang == 'en'){
      var langue ='en'
      var country ='us'
      } 
      props.changeLang(selectedLang)
      console.log(`https://newsapi.org/v2/sources?language=${langue}&country=${country}&apiKey=2883e07c86dd475cac2332c62fc8a276`)
      const data = await fetch(`https://newsapi.org/v2/sources?language=${langue}&country=${country}&apiKey=2883e07c86dd475cac2332c62fc8a276`,)
      const body = await data.json()
      setSourceList(body.sources)
      console.log(body.sources)
    }

    APIResultsLoading()
  }, [selectedLang])

  return (
    <div>
        <Nav/>
       
       <div style ={{display:'flex', justifyContent:'center' , alignItems:'center'}} className="Banner">
          <img style={{width:'40px', margin:'10px', cursor: 'pointer'}} src='/images/fr.jpg'  onClick={() => setSelectedLang('fr')}/>
          <img style={{width:'40px', margin:'10px', cursor: 'pointer'}} src='/images/en.jpg'  onClick={() => setSelectedLang('en')} />
    
       </div> 
      
      
       <div className="HomeThemes">
          
              <List
                  itemLayout="horizontal"
                  dataSource={sourceList}
                  renderItem={source => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={`/images/${source.category}.png`} />}
                        title={<Link to={`/screenarticlesbysource/${source.id}`}>{source.name}</Link>}
                        description={source.description}
                      />
                    </List.Item>
                  )}
                />


        </div>
                 
      </div>
  );
}

function mapStateToProps(state){
  return {selectedLang: state.selectedLang}
}
function mapDispatchToProps(dispatch){
  return {
    changeLang: function (selectedLang){
      dispatch({type: 'changeLang', selectedLang: selectedLang})
    }
  }
}
export default connect (
  mapStateToProps,
  mapDispatchToProps
  )(ScreenSource);