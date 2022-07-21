import json
class editJson:
    def __init__(self, file):
        self.file = file
    
    def __enter__(self):
        with open(self.file,"r") as p:
            self.json = json.load(p)
        return self
    def __exit__(self, type, value, tb):
        with open(self.file, "w") as p:
            json.dump(self.json, p, indent=4)
