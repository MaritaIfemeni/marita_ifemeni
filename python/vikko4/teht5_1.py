class Account:
    def __init__(self, balance = 0):
        self.balance = balance
    
    def deposit(self, dep):
        self.balance += dep

    def withdraw(self, wit):
        if self.validate_withdraw(wit):
            self.balance -= wit
        else:
            print(f"You only have {self.balance} to withdraw!")

    def validate_withdraw(self, wit):
        if (wit > self.balance):
            return False
        else:
            return True

    def get_balance(self) -> int:
        return self.balance