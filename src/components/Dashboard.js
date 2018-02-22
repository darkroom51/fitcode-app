import React, {Component} from 'react';
import {RadialBarChart, RadialBar} from 'recharts';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'

import {connect} from "react-redux";


const style = {
    margin: 12,
};

class Dashboard extends Component {

        actualNumberOFusers = () => ( this.props.usersCount ?
        this.props.usersCount.length
        :
        null)


    render() {
        let foodCount = [0, 0, 0, 0, 0, 0];
        this.props.foodData && this.props.foodData
            .forEach(([key, product]) => {
                switch (product.category) {
                    case 'Warzywa' : foodCount[0] += 1; break;
                    case 'Owoce' : foodCount[1] += 1; break;
                    case 'Mięso' : foodCount[2] += 1; break;
                    case 'Ryby' : foodCount[3] += 1; break;
                    case 'Nabiał' : foodCount[4] += 1; break;
                    case 'Vege-Food' : foodCount[5] += 1; break;
                    default :
                        return;
                }
            })
        const foodCountTotal = foodCount.reduce((reducer, element) => {
            return reducer += element
        }, 0)


        return (
            <div style={{textAlign: "center"}}>
                <Paper style={{margin: 20, padding: 20}} zDepth={2}>
                    <h1 style={{color:"#777"}}>Welcome to FitCode AppNG</h1>
                    <h3 style={{color:"#777"}}>All fit foodies under one buttON ;)</h3>
                    <Link to="/food-list">
                        <RaisedButton label="See our foodies" primary={true} style={style}/>
                    </Link>
                </Paper>


                <Paper style={{margin: 20, padding: 20}} zDepth={2}>
                    <Grid>
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <h3 style={{color:"#777"}}>Biggest foodies db in our galaxy</h3>
                                <div style={{overflow:'hidden', textAlign:'center'}}>
                                    <RadialBarChart width={300} height={160} cx={150} cy={20} innerRadius={20} outerRadius={140} barSize={20} data={[
                                        {name: 'Vege-Food', uv: foodCount[5], fill: '#83a6ed'},
                                        {name: 'Nabiał', uv: foodCount[4], fill: '#8dd1e1'},
                                        {name: 'Ryby', uv: foodCount[3], fill: '#82ca9d'},
                                        {name: 'Mięso', uv: foodCount[2],  fill: '#a4de6c'},
                                        {name: 'Owoce', uv: foodCount[1],  fill: '#d0ed57'},
                                        {name: 'Warzywa', uv: foodCount[0],  fill: '#9eed46'}
                                    ]} startAngle={180} endAngle={360} style={{display:'inline-block'}}>
                                        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv'/>
                                    </RadialBarChart>
                                    <div style={{margin:'20px 0 20px 0', fontSize:'14px', color:'#777'}}>
                                        <span style={{borderBottom: '5px solid #9eed46', display:'inline-block', marginTop: 5}}>Warzywa: {foodCount[0]}</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #d0ed57'}}>Owoce: {foodCount[1]}</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #a4de6c'}}>Mięso: {foodCount[2]}</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #82ca9d'}}>Ryby: {foodCount[3]}</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #8dd1e1'}}>Nabiał: {foodCount[4]}</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #83a6ed'}}>Vege-Food: {foodCount[5]}</span>
                                    </div>
                                    <div style={{margin:'20px 0 20px 0', fontSize:'14px', color:'#777'}}>
                                        Total: {foodCountTotal} :)
                                    </div>
                                </div>
                                <Divider style={{margin:'0 0 20px 0'}} />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <h3 style={{color:"#777"}}>Biggest users count in entire universe</h3>
                                <div style={{overflow:'hidden', textAlign:'center'}}>
                                    <RadialBarChart width={300} height={160} cx={150} cy={20} innerRadius={20} outerRadius={140} barSize={20} data={[
                                        {name: 'Week 3', uv: 4, fill: '#82ca9d'},
                                        {name: 'Week 4', uv: 5,  fill: '#a4de6c'},
                                        {name: 'Week 5', uv: 6,  fill: '#d0ed57'},
                                        {name: 'Now', uv: this.actualNumberOFusers(),  fill: '#9eed46'}
                                    ]} startAngle={180} endAngle={360} style={{display:'inline-block'}}>
                                        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv'/>
                                    </RadialBarChart>
                                    <div style={{margin:'20px 0 20px 0', fontSize:'14px', color:'#777'}}>
                                        <span style={{borderBottom: '5px solid #9eed46', display:'inline-block', marginTop: 5}}>Now: {this.actualNumberOFusers()}</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #d0ed57'}}>Week3: 6</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #a4de6c'}}>Week2: 5</span>&nbsp;&nbsp;
                                        <span style={{borderBottom: '5px solid #82ca9d'}}>Week1: 4</span>
                                    </div>
                                    <div style={{margin:'20px 0 20px 0', fontSize:'14px', color:'#777'}}>
                                        Total: {this.actualNumberOFusers()} :)
                                    </div>
                                </div>
                                <Divider style={{margin:'0 0 20px 0'}} />
                            </Col>
                        </Row>
                    </Grid>
                </Paper>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    foodData: state.products.productsData,
    usersCount: state.dashboard.usersCount
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)