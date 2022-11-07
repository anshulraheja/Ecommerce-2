import { Button, Form, Input } from 'antd';
import './auth.scss';

const Signup = () => {
	return (
		<div>
			<div className="auth-modal">
				<div className="modal-container">
					<button className="btn-close-modal">x</button>
					<div className="modal-box">
						<div className="modal-content-box">
							<div className="modal-left">
								<span className="modal-left-title">Looks like you're new here!</span>
								<p className="modal-left-content">Sign up with your mobile number to get started</p>
							</div>
							<div className="modal-right">
								<Form>
									<Form.Item
										label="Name"
										name="name"
										rules={[{ required: true, message: 'Please input your name!' }]}>
										<Input />
									</Form.Item>

									<Form.Item
										label="Email"
										name="email"
										rules={[{ required: true, message: 'Please input your email!' }]}>
										<Input />
									</Form.Item>

									<Form.Item
										label="Password"
										name="password"
										rules={[{ required: true, message: 'Please input your password!' }]}>
										<Input.Password />
									</Form.Item>
									<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
										<Button type="primary" htmlType="submit" className="btn-signup">
											Sign up
										</Button>
									</Form.Item>
								</Form>
								<a href="" className="btn-existing-user">
									Existing User? Log in
								</a>
								<div className="terms-and-condition">
									By continuing, you agree to Flipkart's Terms of Use and Privacy Policy
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Login = () => {
	return (
		<div>
			<div className="auth-modal">
				<div className="modal-container">
					<button className="btn-close-modal">x</button>
					<div className="modal-box">
						<div className="modal-content-box">
							<div className="modal-left">
								<span className="modal-left-title">Login</span>
								<p className="modal-left-content">Get access to your Orders and Wishlist</p>
							</div>
							<div className="modal-right">
								<Form>
									<Form.Item
										label="Email"
										name="email"
										rules={[{ required: true, message: 'Please input your email!' }]}>
										<Input />
									</Form.Item>

									<Form.Item
										label="Password"
										name="password"
										rules={[{ required: true, message: 'Please input your password!' }]}>
										<Input.Password />
									</Form.Item>
									<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
										<Button type="primary" htmlType="submit" className="btn-signup">
											Login
										</Button>
									</Form.Item>
								</Form>
								<a href="" className="btn-existing-user">
									New to Flipkart? Create an account
								</a>
								<div className="terms-and-condition">
									By continuing, you agree to Flipkart's Terms of Use and Privacy Policy
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const Auth = () => {
	return <Login />;
};

export default Auth;
