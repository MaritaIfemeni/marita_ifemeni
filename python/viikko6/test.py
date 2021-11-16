#All test functions below as given in the task
from typing import Container
import unittest
import teht1
import numpy as np

class TestCalc(unittest.TestCase):
    def test_average(self):
        self.assertEqual(teht1.average(2, 4), 3)
        self.assertEqual(teht1.average(-2, -4), -3)
        self.assertEqual(teht1.average(2, 2), 2)
    
    def test_average2(self):
        self.assertEqual(teht1.average2(2, 4, 4, 8), 4.5)
        self.assertEqual(teht1.average2(-2, -4, -5, -9), -5)
        self.assertEqual(teht1.average2(2, 2, 20, 6), 7.5)

    def test_array_sum(self):
        self.assertEqual(teht1.array_sum(np.array([6, 1000, 9, 12, 5, 1])), 1033)
        self.assertEqual(teht1.array_sum(np.array([3, 7, 9, 12, 244, 5, 1])), 281)
        self.assertEqual(teht1.array_sum(np.array([6, -8, 9, 12, 5, 81])), 105)
        
    def test_factorial(self):
        self.assertEqual(teht1.factorial(4), 24)
        self.assertEqual(teht1.factorial(10), 3628800 )
        self.assertEqual(teht1.factorial(2), 2)

    def test_biggest(self):
        self.assertEqual(teht1.biggest(3, 5, 8), 8)
        self.assertEqual(teht1.biggest(88, 4, 3), 88)
        self.assertEqual(teht1.biggest(77, 100, 2), 100)

    def test_bmi(self):
        self.assertEqual(teht1.bmi(178.0, 90.0), 28.4)
        self.assertEqual(teht1.bmi(168.0, 90.0), 31.9)
        self.assertEqual(teht1.bmi(168.0, 50.0), 17.70)

    def test_biggest2(self):
        self.assertEqual(teht1.biggest2(3, 5, 8, 6, 4), 8)
        self.assertEqual(teht1.biggest2(88, 4, 3, 111, 3), 111)
        self.assertEqual(teht1.biggest2(77, 100, 100, 2, 4), 100)

    def test_compine(self):
        result0 = teht1.combine(np.array([3, 7, 9, 12, 244, 5, 1]), 2)
        self.assertEqual(result0, 42)
        result1 = teht1.combine(np.array([3, 7, 9, 12, 244, 5, 1, 9]), 2)
        self.assertEqual(result1, 56)
        result2 = teht1.combine(np.array([3, 7, 9 , 12 , 244 , 5, 1, 8, 9]), 3)
        self.assertEqual(result2, 252)

    def test_standardDeviation(self):
        self.assertEqual(teht1.standard_deviation(np.array([10, 12, 23, 23, 16, 23, 21])), 5.57)
        self.assertEqual(teht1.standard_deviation(np.array([3, 7, 9, 12, 244, 5, 1])), 89.97)
        self.assertEqual(teht1.standard_deviation(np.array([6, -8, 9, 12, 5, 81])), 31.84)    

    def test_search(self):
        result0 = teht1.search(7, np.array([3, 7, 9, 12, 244, 5, 1]))
        self.assertEqual(result0, "Found")
        result0 = teht1.search(15, np.array([3, 7, 9, 12, 244, 5, 1]))
        self.assertEqual(result0, "Not found")

    def test_root(self):
        self.assertEqual(teht1.root(4), 2)
        self.assertEqual(teht1.root(10), 3.16)
        self.assertEqual(teht1.root(44), 6.63)

    def test_neper(self):
        self.assertEqual(teht1.neper(1), 2.00000)
        self.assertEqual(teht1.neper(2), 2.25000)
        self.assertEqual(teht1.neper(5), 2.48832)

    def test_cal_sin(self):
        self.assertEqual(teht1.cal_sin(40), 0.64)
        self.assertEqual(teht1.cal_sin(120), 0.56)
        self.assertEqual(teht1.cal_sin(90), 0.92)

    def test_cal_cos(self):
        self.assertEqual(teht1.cal_cos(40), 0.77)
        self.assertEqual(teht1.cal_cos(110), -0.34)
        self.assertEqual(teht1.cal_cos(90), 0.00)

    def test_selection_sort(self):
        self.assertEqual(teht1.selection_sort([3, 33, 1, 8, 2], 5), [1, 2, 3, 8, 33])
        self.assertEqual(teht1.selection_sort([3, 6, 35, 8, 22], 5), [3, 6, 8, 22, 35])
        self.assertEqual(teht1.selection_sort([3, 33, 1, 8, 2, 5], 6), [1, 2, 3, 5, 8, 33])

if __name__ == '__main__':
    unittest.main()