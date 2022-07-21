from http.server import BaseHTTPRequestHandler, HTTPServer

from threading import Thread


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes("<html>Hello. I am alive</html>", "utf-8"))
    def do_HEAD(self):
        self.send_header("Content-type", "text/html")


def run():
    hostName = "0.0.0.0"
    serverPort = 84
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
  

def keep_alive():
    t = Thread(target=run)
    t.start()
