/* global spyOn */
/* global describe */
/* global beforeEach */
/* global it */
/* global expect */
/* globals Player: false, Song: false */

describe('MindMapService', function () {
  var mindMapService;

  beforeEach(function () {
    mindMapService = new MindMapService();
  });

  describe("createNode", function () {
    it('should return id after inserting node in DB', function () {

      var mindmapId = 1, name = 'string'
        , result = { name: name, children: [] };
      spyOn(Mindmaps, 'insert').and.returnValue(mindmapId);

      expect(mindMapService.createNode(name)).toBe(mindmapId);
      expect(Mindmaps.insert.calls.argsFor(0)).toEqual([result]);
    });
  });

  describe("updateNodeMockup", function () {
    it('state of the object should remain same after DB update', function () {
      var node = { _id: 1, children: [], name: 'someNode' },
        key = { _id: node._id },
        updatedMap = { children: [], name: 'someNode' };
      spyOn(Mindmaps, 'update');
      mindMapService.updateNode(node);
      expect(Mindmaps.update.calls.argsFor(0)).toEqual([key, updatedMap]);
    });
  });
});

 