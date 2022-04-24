export default (request, response) => {
    const body = request.body;
    return response.json(body);
}