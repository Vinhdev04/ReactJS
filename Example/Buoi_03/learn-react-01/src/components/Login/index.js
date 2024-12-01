function Login() {
  //  # if-else
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <>
          <div>Login</div>
        </>
      ) : (
        <>
          <div>Sign Up</div>
        </>
      )}

      {isLogin && <div>Successfully!...</div>}
    </>
  );
}
export default Login;
