import request from 'superagent';

const URL = 'https://glacial-mesa-65705.herokuapp.com/';

export async function getYarns() {
	const { body } = await request.get(`${URL}/yarns`);
	return body;
}

export async function getYarnWeights() {
	const { body } = await request.get(`${URL}/yarn_weights`);
	return body;
}

export async function getYarnByID(id) {
	const { body } = await request.get(`${URL}/yarns/${id}`);
	return body;
}

export async function addYarn(newYarn) {
	const { body } = await request.post(`${URL}/yarns`)
		.send(newYarn);
	return body;
}

export async function updateYarn(id, updateData) {
	const { body } = await request.put(`${URL}/yarns/${id}`)
		.send(updateData);
	return body;
}

export async function deleteYarn(id) {
	const { body } = await request.delete(`${URL}/yarns/${id}`);
	return body;
}