var fileStore = new FS.Store.GridFS("file");


var File = new FS.Collection("file", {
 stores: [fileStore]
});

