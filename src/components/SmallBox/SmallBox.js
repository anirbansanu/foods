import React,{Component} from 'react';

// const SmallBox = ({
//     type = 'info',
//     icon = 'ion-bag',
//     count,
//     title,
//     navigateTo
// }) => {
//     const [t] = useTranslation();

//     return (
//         <div className={`small-box bg-${type}`}>
//             <div className="inner">
//                 <h3>{count}</h3>
//                 <p>{title}</p>
//             </div>
//             <div className="icon">
//                 <i className={`ion ${icon || 'ion-bag'}`} />
//             </div>
//             <Link to={navigateTo} className="small-box-footer">
//                 <span className="mr-2">{t('main.label.moreInfo')}</span>
//                 <i className="fa fa-arrow-circle-right" />
//             </Link>
//         </div>
//     );
// };

export default class SmallBox extends Component {
    render() {
        return (
            <div className={`small-box bg-${this.props.type || "info"}`}>
             <div className="inner">
              <h3>
                  {this.props.count || "0"}
                  <sup style={{fontSize: "20px"}}>{this.props.sup || ""}</sup>
              </h3>
                 <p>{this.props.title || "Title"}</p>
             </div>
             <div className="icon">
                 {this.props.iconCompo || <i className={`ion ${this.props.icon || 'ion-bag'}`} />}
             </div>
             <a to={this.props.navigateTo || "/"} href={this.props.navigateTo || "/"} className="small-box-footer">
                 <span className="mr-2">{this.props.info || "More Info"}</span>
                 <i className="fa fa-arrow-circle-right" />
             </a>
         </div>
        )
    }
}


