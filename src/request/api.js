import request, { domain } from './request.js';


export const getTasks = () => {
    return request(
        'GET',
        `${domain}/tasks`,
        {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            }
        }
    );
};

export const postTasks = data => {
    return request(
        'POST',
        `${domain}/tasks`,
        {
            data,
            headers: {
                'content-type': 'application/json'
            }
        }
    );
};

export const putTasks = data => {
    return request(
        'PUT',
        `${domain}/tasks`,
        {
            data,
            headers: {
                'content-type': 'application/json'
            }
        }
    );
};

export const deleteTasks = data => {
    return request(
        'DELETE',
        `${domain}/tasks`,
        {
            data,
            headers: {
                'content-type': 'application/json'
            }
        }
    );
};