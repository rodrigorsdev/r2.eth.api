pragma solidity ^0.6.4;

contract SimpleStorage {
    
    string private data;

    function set(string memory _data) public{
        data = _data;
    }

    function get() public view returns (string memory){
        return data;
    }
}