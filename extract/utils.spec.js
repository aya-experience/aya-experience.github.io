import { download } from './utils';

jest.mock('request', () => {
	return () => ({
		pipe: jest.fn()
	});
});

jest.mock('fs-extra', () => {
	return {
		createWriteStream() {
			return true;
		}
	};
});

jest.mock('path', () => {
	return {
		resolve() {
			return 'dir';
		}
	};
});

describe('utils functions', () => {
	it('should return pics.jpeg given http://**/pics.jpeg', () => {
		expect(download('http://pupuce.com/pics.jpeg')).toBe('pics.jpeg');
	});
	it('should return an empty string given uri without file', () => {
		expect(download('http://pupuce.com/')).toBe('');
	});
	it('should return file given http://**/file', () => {
		expect(download('http://pupuce.com/file')).toBe('file');
	});
});
