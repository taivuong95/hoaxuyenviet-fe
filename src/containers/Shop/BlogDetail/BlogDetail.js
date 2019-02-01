import React from 'react';
import loadingScreen from '../../../utilities/loadingScreen';
import axios from 'axios';
import { endPoints } from '../../../services/config';
class BlogDetail extends React.Component {

	state = {
		blog: {}
	}
	componentDidMount() {
		loadingScreen.hideLoading();
	}

	componentWillMount() {
		loadingScreen.showLoading();
		axios.get(endPoints.BLOG_API + this.props.match.params.blog_id).then((res) => {
			console.log(this.props.match.params.blog_id);

			console.log(res);
			this.setState({
				blog: res,
			}, loadingScreen.hideLoading())
		}).catch((err) => {
			loadingScreen.hideLoading();
			console.error(err);
		})
	}
	createContentBlog = (content) => {
		return {
			__html: content
		}
	}

	render() {

		let styleCenter;
		styleCenter = {
			margin: '40px auto 0',
			width: '70%',
		}
		return (
			<>
				<div id="breadcrumb">
					<div className="container">
						<div className="row">
							<ul className="breadcrumb">
								<h2 className="page-title" style={{ fontFamily: 'Times New Roman' }}>Blog</h2>
								<li><a href="/"><i className="fa fa-home"></i></a></li>
								<li><a href="/" style={{ pointerEvents: 'none', cursor: "default" }}>Blog</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div id="content" className="single-blog" style={styleCenter}>
							<h2 className="page-title">{this.state.blog.title}</h2>
							<div className="blog-img" style={{ marginBottom: "10px" }}>
								<img src={this.state.blog.image} alt="Nullam ullamcorper nisl quis" title="Nullam ullamcorper nisl quis" className="img-thumbnail" />
							</div>
							<p dangerouslySetInnerHTML={this.createContentBlog(this.state.blog.content)}></p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default BlogDetail;