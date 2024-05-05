// Your tests here
import { isPalindrome} from '../utils';

describe('isPalindrome', () => {
    it('should return true if the string is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    })
})