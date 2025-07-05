import app from '../app';

jest.mock('../app', () => ({
    listen: jest.fn((port, callback) => callback()),
}));

describe('Server', () => {
    it('should log the correct message when the server starts', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        require('../server');
        expect(consoleSpy).toHaveBeenCalledWith('Server running on port 4000');
        consoleSpy.mockRestore();
    });
});