// eslint-disable-next-line
export default props => {

	if(props.test)
		return props.children;
	else
		return false;
}
