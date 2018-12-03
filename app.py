import requests
from flask import Flask, render_template, request



def send_simple_message(email,name,message):
    return requests.post(
        "https://api.mailgun.net/v3/sandbox515f39ea45664e09b7b8d02ed3252ef9.mailgun.org/messages",
        auth=("api", "f8087779b7c72082836d7e054f471932-1053eade-e03e11e7"),
        data={"from": "Excited User <mailgun@sandbox515f39ea45664e09b7b8d02ed3252ef9.mailgun.org>",
              "to": ["darigazhuman@gmail.com"],
              "subject": "Hello {}".format(name),
              "text": "{} said {}".format(email,message)})

app=Flask("MyApp")

@app.route("/")
def contact():
    return render_template("template.html")

@app.route("/contact", methods=["POST"])
def sign_up():
    form_data = request.form
    email = form_data["email"]
    name = form_data["name"]
    message= form_data["message"]

    send_simple_message(email,name,message)
    return render_template("template.html", submit=True)


app.run(debug=True)


# {
#   "email": "foo@bar.com",
#   "message": "lskdjfksdjfsk",
#   "name": "sdflsdf"
# }
