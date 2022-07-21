from subprocess import Popen, PIPE
import base64
def nodeLines(script):
    scriptr = base64.b64encode(script.encode())
    out = Popen(["node", "index.node.js", scriptr], stdout=PIPE, stderr=PIPE)
    output = []
    for x in out.communicate():
        output.append(x.decode())
    return output
