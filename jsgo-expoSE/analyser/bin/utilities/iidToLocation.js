"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

function _default(sandbox, sid, iid) {
  var iid_string = sandbox.iidToLocation(sid, iid);
  if (!iid_string) {
    return undefined;
  }
  return iid_string.substr(1, iid_string.length - 2).split(":").slice(1); //Comes in the form (Filename:1:2:3:4)   
}